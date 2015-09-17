Template.wifiTest.created = function() {
  this.output = new ReactiveVar();
};

Template.wifiTest.helpers({
  output: function() {
    return( Template.instance().output.get() );
  }
});

Template.wifiTest.events({
  "click button[data-find-interface]": function(event, template) {
    Meteor.call( "findInterface", function(err, resp) {
      template.output.set( JSON.stringify(resp) );
    });
  },
  "click button[data-connect-to-ap]": function(event, template) {
    var ssid = template.find("input#ssid").value;
    var pw = template.find("input#password").value;
    Meteor.call( "connectToAP", {ssid: ssid, password: pw}, function(err, resp) {
      template.output.set( JSON.stringify(resp) );
    });
  },
  "click button[data-reset-wifi]": function(event, template) {
    Meteor.call( "resetWiFi", function(err, resp) {
      template.output.set( JSON.stringify(resp) );
    });
  },
  "click button[data-scan-aps]": function(event, template) {
    Meteor.call( "scanForWiFi", function(err, resp) {
      template.output.set( JSON.stringify(resp) );
    });
  }
});
