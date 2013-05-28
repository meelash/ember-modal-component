# Ember.js Modal Skeleton

This is a simple modal dialog component for Ember.js. Modals are created without a state change.

This has been tested with Ember.js v. 1.0.0-rc.3


# Usage
1. Wrap the handlebar template that you want to be the modal's content with the view helper:

        {{#view App.ModalView}}  
          <h1>Hello!!!11!!!</h1>  
        {{#/view}}

2. Add an action to whatever element you want to open the modal dialog:

        <a {{action 'showSaveDialog'}} >Save me!!!</a>

3. Add an event handler on your application route to create and append the dialog:

        App.ApplicationRoute = Ember.Route.extend({
          events: {
            showSaveDialog: function () {
              // assuming your view is call SaveDialogView and your template is called save_dialog
              var dialog = this.container.lookup('view:save_dialog');
              dialog.append();
            }
          }
        });
