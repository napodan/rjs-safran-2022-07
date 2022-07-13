import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { add } from "./messagesSlice";
import store from "./store";
//import configureStore from 'redux-mock-store' //ES6 modules


// const middlewares = []
// const mockStore = configureStore(middlewares)

//import store from './store';


describe('slice messages', () => {
    it('should dispatch construct addAction',async () => {
        const message={id:0,dt:new Date().toString(), from:0, to:0, text:'hello'}
        const addmessage = add(message);
        expect(addmessage.payload).toBe(message);

        const beforeAddLength=store.getState().messages.values.length;
        (await store.dispatch(addmessage))
        const ateAfter=store.getState();
        const afterAdd=store.getState().messages.values.length;
        expect(afterAdd- beforeAddLength).toBe(1)
        

    });

});