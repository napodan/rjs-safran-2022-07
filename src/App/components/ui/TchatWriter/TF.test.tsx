import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import {TF} from './TF';

describe('<TF >', () => {
    it('should signal invalid', () => {
        let isValidValue=true;
        render(<TF value="123" onChange={(value:string,isValid:boolean)=>{isValidValue=isValid}}/>)
        const inp:HTMLInputElement=screen.getByTestId('TF')
        expect(isValidValue).toBeFalsy();
        expect(inp.style.backgroundColor).toBe('red');
        document.querySelector('in')

    });
});