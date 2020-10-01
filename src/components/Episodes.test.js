import React from 'react';
import {queryAllByTestId, render} from '@testing-library/react';
import Episodes from './Episodes';

const testSelectedData = 
    [
        {
            id: 22222,
            image: {
                medium: "img-med.jpg", 
                original: "img-og.jpg"
            },
            name: "FIRST TITLE",
            number: 21,
            runtime: 120,
            season: 101,
            summary: "<p>yadda yadda yap yap.</p>",
        },
    {
        id: 234567,
        image: {
            medium: "img-med.jpg", 
            original: "img-og.jpg"
        },
        name: "SECOND TITLE",
        number: 23,
        runtime: 120,
        season: 101,
        summary: "<p>yadda yadda yap yap.</p>",
    }
]

test('component renders', () => {
    render(<Episodes episodes = {[]}/>)

}) 

test('Episodes shows data when rendered with new episodes props' , () => {
    const {queryAllByTestId, rerender} = render(<Episodes episodes = {[]}/>)

    expect(queryAllByTestId('TESTepisode')).toHaveLength(0);
    expect(queryAllByTestId('TESTepisode')).toStrictEqual([]);

    rerender(<Episodes episodes = {testSelectedData} />)

    expect(queryAllByTestId('TESTepisode')).toHaveLength(2);
})