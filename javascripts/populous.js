$(window).load(function(){

    ;(function(_updatable_selects, $) {
        // Class constructor
        var Class = function() {
            return function(params) {
                if ( !(this instanceof arguments.callee) ) {
                    return new arguments.callee(arguments);
                }
                this.initialize.apply(this,(params.callee ? params : arguments));
            };
        };

        var UpdatableSelect = Class();
        UpdatableSelect.prototype = {
            initialize: function(_updatable_select){
                this.$updatable_select = $(_updatable_select);
                this.options_array = this.$updatable_select.data('populous-options');

                this.checkValidity();
                this.useOptionsAtIndex(0); // Show initial options
            },
            checkValidity: function() {
                if (typeof this.options_array == 'undefined' || this.options_array.length < 1) {
                    console.error(this.$updatable_select[0] + ' is not a valid UpdatableSelect canidate. Node must define a "data-updatable-options" attribute that provides a string representation of an array of Javascript objects wherein each object is a set of options for a given select tag. Keys and values in each object represent individual select options with keys being the "value" attribute for each option and values being the text the user will see in the select dropdown.');
                }
                if (!this.$updatable_select.is('select')) {
                    console.error(this.$updatable_select[0] + ' must be a "select" tag to be a valid UpdatableSelect candidate.');
                }
            },
            useOptionsAtIndex: function(i) {
                var self = this;

                if (this.isValidIndex(i)) {
                    var new_options = this.options_array[i];
                    this.$updatable_select.empty(); // remove old options
                    $.each(new_options, function(key, value) {
                        self.$updatable_select.append($("<option></option>")
                                                      .attr("value", key).text(value));
                    });
                }
            },
            isValidIndex: function(i) {
                var valid = true;

                if (typeof this.options_array[i] == 'undefined' || this.options_array[i] == null) {
                    console.error(i + ' is not a valid index for options array.');
                    valid = false;
                }
                return valid;
            }
        }

        _updatable_selects.each(function(ix, o){
            $(o).data('UpdatableSelect.instance', new UpdatableSelect(o));
        });

        $.fn.useOptionsAtIndex = function(i) {
            this.each(function() {
                $(this).data('UpdatableSelect.instance').useOptionsAtIndex(i);
            });
        }

        return _updatable_selects;

    })($('.populous-select'), jQuery);
});
