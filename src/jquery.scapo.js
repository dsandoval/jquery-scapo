/*
	This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.

    Author: Danilo Sandoval <dsandovalortiz@gmail.com> 
    https://github.com/dsandoval

    Repository: https://github.com/dsandoval/jquery-scapo
*/

$.fn.scapo = function(obj){
    var elem = this;
    var elem_id = elem.prop('id');
    var data;

    if(typeof obj.source == 'string') {
        $.getJSON(obj.source, function(json){
            data = json;
        });
    } else if(typeof obj.source == 'object') {
        data = obj.source;
    }

    var placeholder = (obj.placeholder)?obj.placeholder:'Choose a option ...';

    $(elem).append($('<option></option>').prop('value',"0").text(placeholder));

    $.each( data, function( key, val ) {
        var shtml = "<option ";
            shtml += "value='"+val[obj.value]+"'";
            if(obj.nested) {
                if(obj.nested.parent) {
                    shtml += "data-"+obj.nested.by+"='"+val[obj.nested.by]+"'";
                    shtml += " style='display:none' ";
                }
            }
            shtml += ">";
            shtml += val[obj.text];
            shtml += "</option";

        $(elem).append(shtml);
    });

    $(elem).on('change',function(event){
        
        if(obj.nested) {

            if(obj.nested.parent) {
                var eq = $(elem).find(":selected").data(obj.nested.by);
                $(obj.nested.parent+' option:eq('+eq+')').prop('selected', true);
            }

            if(obj.nested.child) {
                $(obj.nested.child+" :selected").prop('selected',false);
                $(obj.nested.child+" option").show();
                if(obj.nested.by) {
                    $(obj.nested.child+" option[data-"+obj.nested.by+"!='"+$(elem).val()+"']").hide();
                }
                $(obj.nested.child+" option[value='0']").show();
                $(obj.nested.child).trigger('change');
            }

        }
    });
};