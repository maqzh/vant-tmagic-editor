import { toRaw } from 'vue';
import type { MApp } from '@tmagic/core';
import serialize from 'serialize-javascript';
const { VITE_API_PATH } = import.meta.env;

export function saveFormData(value: MApp): Promise<any> {
    const formJson = serialize(toRaw(value), {
        space: 2,
        unsafe: true,
    }).replace(/"(\w+)":\s/g, '$1: ')
    return fetch(`${VITE_API_PATH}/api/form/action/saveRevision`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            content: formJson
        })
    }).then((response: Response) => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
}

export function getFormData(): Promise<any> {
    return fetch(`${VITE_API_PATH}/api/form/action/getFormData`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({})
    }).then((response: Response) => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
}
