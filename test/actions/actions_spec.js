import * as actions from '../../src/actions/index'
import * as types from '../../src/actions/types'
import {expect} from 'chai';

describe('actions books', () => {
  describe('#getBooksElastic()', function(){
    it('returns action GET_BOOKS_ELASTIC', function(){
      // execute
      let action = actions.getBooksElastic();
      // console.log("Action ",action.type)
      // verify
      expect(action.type).to.deep.equal('GET_BOOKS_ELASTIC');
      expect(action.payload).to.exist;
    });
  });

  describe('#getBooks()', function(){
    it('returns action GET_BOOKS', function(){
      // execute
      let action = actions.getBooks();
      // console.log("Action ",action)
      // verify
      expect(action.type).to.deep.equal('GET_BOOKS');
      expect(action.payload).to.exist;
    });
  });

  describe('#createBooks()', function(){
    it('returns action CREATE_BOOK', function(){
      // execute
      let action = actions.createBook();
      // console.log("Action ",action)
      // verify
      expect(action.type).to.deep.equal('CREATE_BOOK');
      expect(action.payload).to.exist;
    });
  });

  describe('#deleteBook()', function(){
    it('returns action DELETE_BOOK', function(){
      // execute
      let action = actions.deleteBook();
      // console.log("Action ",action)
      // verify
      expect(action.type).to.deep.equal('DELETE_BOOK');
      expect(action.payload).to.exist;
    });
  });

  describe('#getBook()', function(){
    it('returns action GET_BOOK', function(){
      // execute
      let action = actions.getBook();
      // console.log("Action ",action)
      // verify
      expect(action.type).to.deep.equal('GET_BOOK');
      expect(action.payload).to.exist;
    });
  });
})


describe('actions profiles', () => {
  describe('#signIn()', function(){
    it('returns action SIGN_IN', function(){
      // execute
      let action = actions.signIn();
      // console.log("Action ",action.type)
      // verify
      expect(action.type).to.deep.equal('SIGN_IN');
      expect(action.payload).to.exist;
    });
  });

  describe('#signOut()', function(){
    it('returns action SIGN_OUT', function(){
      // execute
      let action = actions.signOut();
      // console.log("Action ",action)
      // verify
      expect(action.type).to.deep.equal('SIGN_OUT');
      expect(action.payload).to.exist;
    });
  });

  describe('#signUp()', function(){
    it('returns action SIGN_UP', function(){
      // execute
      let action = actions.signUp();
      // console.log("Action ",action)
      // verify
      expect(action.type).to.deep.equal('SIGN_UP');
      expect(action.payload).to.exist;
    });
  });

  describe('#getProfile()', function(){
    it('returns action GET_PROFILE', function(){
      // execute
      let action = actions.getProfile();
      // console.log("Action ",action)
      // verify
      expect(action.type).to.deep.equal('GET_PROFILE');
      expect(action.payload).to.exist;
    });
  });

  describe('#getProfiles()', function(){
    it('returns action GET_PROFILES', function(){
      // execute
      let action = actions.getProfiles();
      console.log("Action ",action.payload)
      // verify
      expect(action.type).to.deep.equal('GET_PROFILES');
      expect(action.payload).to.exist;
    });
  });

  describe('#updateProfile()', function(){
    it('returns action UPDATE_PROFILE', function(){
      // execute
      let action = actions.updateProfile();
      // verify
      expect(action.type).to.deep.equal('UPDATE_PROFILE');
      expect(action.payload).to.exist;
    });
  });
})


