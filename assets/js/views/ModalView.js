/**
 * The view we are using for our modal dialog box.
 **/

App.ModalView = Ember.View.extend({
  layoutName: 'modal',

  closeModal: function() {
    this.destroy();
  }
});
