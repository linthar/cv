'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('CV App', function() {
     
  describe('CV Experience list ', function() {
     
    beforeEach(function() {
       browser().navigateTo('../../app/index.html');
    });
     
     
    it('should list the experience of the user ', function() {
       expect(repeater('.phones li').count()).toBe(20);
     
       input('query').enter('nexus');
       expect(repeater('.phones li').count()).toBe(1);
     
       input('query').enter('motorola');
       expect(repeater('.phones li').count()).toBe(8);
    });

  
  
  });
});
 
