import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
    vus: 10, // Number of virtual users
    duration: '30s', // Duration of the test
};

export default function () {
    let url = 'http://192.168.65.3:30007/generate';
    let payload = JSON.stringify({
        prompt: 'Hello, how are you?',
    });

    let params = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    let res = http.post(url, payload, params);
    check(res, {
        'status was 200': (r) => r.status === 200,
    });

    sleep(1);
}
