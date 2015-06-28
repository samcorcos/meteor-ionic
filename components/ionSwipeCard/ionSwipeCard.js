Template.ionSwipeCard.helpers({
  cardClasses: function () {
    var classes = ['card'];

    if (this.class) {
      var customClasses = this.class.split(' ');
      _(customClasses).each(function (customClass) {
        classes.push(customClass);
      });
    }

    if (this.list) {
      classes.push('list');
    }

    return classes.join(' ');
  },
  templateGestures: function() {
    return this.templateGestures;
  }
});
