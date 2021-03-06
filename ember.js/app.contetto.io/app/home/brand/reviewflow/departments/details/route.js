import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

const DepartmentDetailsRoute = Ember.Route.extend(AuthenticatedRouteMixin, {
	model () {
		return Ember.RSVP.hash({
  			isReviewFlowTabActive: true
		});
  	}
});

export default DepartmentDetailsRoute;
