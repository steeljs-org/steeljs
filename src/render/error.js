//import base
//import core/notice
//import core/array/makeArray


function render_error() {
	log(arguments);
    core_notice_fire('renderError', core_array_makeArray(arguments));
}