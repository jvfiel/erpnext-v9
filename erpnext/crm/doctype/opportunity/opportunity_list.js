frappe.listview_settings['Opportunity'] = {
	add_fields: ["customer_name", "enquiry_type", "enquiry_from","stage"],
	get_indicator: function(doc) {
		var indicator = [__(doc.stage), frappe.utils.guess_colour(doc.stage), "stage,=," + doc.stage];
		// if(doc.status=="Quotation") {
		// 	indicator[1] = "green";
		// }
		return indicator;
	},
	onload: function(listview) {
		// var method = "erpnext.crm.doctype.opportunity.opportunity.set_multiple_status";
        //
		// listview.page.add_menu_item(__("Set as Open"), function() {
		// 	listview.call_for_selected_items(method, {"status": "Open"});
		// });
        //
		// listview.page.add_menu_item(__("Set as Closed"), function() {
		// 	listview.call_for_selected_items(method, {"status": "Closed"});
		// });
	},
	  refresh: function (me) {
		  // console.log("REFRESHED.");
		  // console.log(me.filter_list);
		  // console.log(me.page);

		   me.page.add_sidebar_item(__("Opporunity to Customer Rate"), function () {

            frappe.set_route("opportunity-to-custo");


        });


		  me.page.add_sidebar_item(__("Setup Opportunity Stages"), function () {

			  frappe.set_route("List","Opportunity Stage");


		  });
		   me.page.add_sidebar_item(__("View Leads"), function () {

			  frappe.set_route("List","Lead");


		  });
		   me.page.add_sidebar_item(__("View Customers"), function () {

			  frappe.set_route("List","Customer");


		  });
	  }
};
