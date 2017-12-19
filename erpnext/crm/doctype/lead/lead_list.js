/**
 * Created by jvfiel on 11/6/16.
 */
frappe.listview_settings['Lead'] = {
    // add_fields: ["workflow_state", "quarter"],

    onload:function(listview){
        console.log(listview);
        // listview.filter_list.clear_filters();
        //  listview.filter_list.add_filter(listview.doctype, "status_1", '!=', "Closed - Qualified");
        //             listview.run();

    },

    refresh: function (me) {

          me.page.add_sidebar_item(__("Lead to Opportunity Rate"), function () {

            frappe.set_route("lead-to-opportunity-");


        });

        if(me.filter_list.filters.length>0) {
            console.log(1);
            for (var i=0;i<me.filter_list.filters.length;i++) {
                if (me.filter_list.filters[i].fieldname == "lead_converted") {
                    me.filter_list.clear_filters();
                    me.filter_list.add_filter(me.doctype, "lead_converted", 'like', "");
                    me.run();
                }
            }
        }
        else {
            console.log(2);
            me.filter_list.clear_filters();
            me.filter_list.add_filter(me.doctype, "lead_converted", 'like', "");
                me.run();
        }
        // console.log("REFRESHED.");
        // console.log(me.filter_list);
        // console.log(me.page);
        me.page.add_sidebar_item(__("View Lead"), function () {

            frappe.set_route("query-report/View Lead");


        });
        me.page.add_sidebar_item(__("View Customers"), function () {

            frappe.set_route("List","Customer");


        });
        me.page.add_sidebar_item(__("View Opportunities"), function () {

            frappe.set_route("List","Opportunity");


        });
          me.page.add_sidebar_item(__("Chanje Only"), function () {
            var assign_filter = me.filter_list.get_filter("chanje_ryder");
            assign_filter && assign_filter.remove(true);

            me.filter_list.add_filter(me.doctype, "chanje_ryder", '=', "Chanje");
            me.run();
        });
        me.page.add_sidebar_item(__("Ryder Only"), function () {
            var assign_filter = me.filter_list.get_filter("chanje_ryder");
            assign_filter && assign_filter.remove(true);

            me.filter_list.add_filter(me.doctype, "chanje_ryder", '=', "Ryder");
            me.run();
        });
        //
        //  me.page.add_sidebar_item(__("Mean Time Between Failure"), function () {
        //
        //     frappe.set_route("mean-time-between-fa");
        //
        //
        // });

    },
};