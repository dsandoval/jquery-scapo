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
    $.getJSON( obj.source, function( data ) {
        $(elem).append($('<option></option>').prop('value',"0").text('Seleccione ...'));
        $.each( data, function( key, val ) {
            var shtml = "<option ";
                shtml += "value='"+val[obj.value]+"'";
                if(obj.parent) {
                    shtml += "data-"+obj.parent.by+"='"+val[obj.parent.by]+"'";
                    shtml += " style='display:none' ";
                }
                shtml += ">";
                shtml += val[obj.text];
                shtml += "</option";
            $(elem).append(shtml);
        });
        $(elem).on('change',function(event){
            if(obj.parent) {
                var eq = $(elem).find(":selected").data(obj.parent.by);
                $(obj.parent.parent_id+' option:eq('+eq+')').prop('selected', true);
            }
            if(obj.child) {
                $(obj.child).prop('disabled',false);
                $(obj.child+" :selected").prop('selected',false);
                $(obj.child+" option").show();
                $(obj.child+" option[data-"+$(elem).prop('id')+"!="+$(elem).val()+"]").hide();
                $(obj.child+" option[value='0']").show();
                $(obj.child).trigger('change');
            }
        });
    });
};