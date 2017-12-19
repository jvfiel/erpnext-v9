frappe.listview_settings['Customer'] = {
	add_fields: ["name", "territory", "customer_group", "customer_type", "image"],
	refresh:function (me) {
		 me.page.add_sidebar_item(__("Quotations Sent"), function () {

            frappe.set_route("quotes-sent-from-cus");


        });
	}
};
