# What is this?


A custom koa folder structure for basic API boilerplace usage by mReschke 2017-04-06.

This represents the latest in mreschke node.js koa folder design.  Use this as a starting place
for all your koa JWT auth API's.



# Getting Started

`docker-compose up` goto localhost:3000

See the `docker` bash file for other helper commands




# Benchmarks

Simple hello world home JSON return

2017-04-29 21:41:01 ⌚  mreschke@macbook in ~
○ $ → wrk -t4 -c10 -d5s http://localhost:3000/
Running 5s test @ http://localhost:3000/
  4 threads and 10 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency     1.67ms    1.09ms  21.34ms   94.55%
    Req/Sec     1.24k   204.80     1.62k    65.69%
  25197 requests in 5.10s, 4.64MB read
Requests/sec:   4939.26
Transfer/sec:      0.91MB


2017-04-29 21:42:47 ⌚  mreschke@macbook in ~
○ $ → ab -n 1000 -c 10 http://localhost:3000/
This is ApacheBench, Version 2.3 <$Revision: 1706008 $>
Copyright 1996 Adam Twiss, Zeus Technology Ltd, http://www.zeustech.net/
Licensed to The Apache Software Foundation, http://www.apache.org/

Server Software:
Server Hostname:        localhost
Server Port:            3000

Document Path:          /
Document Length:        24 bytes

Concurrency Level:      10
Time taken for tests:   0.499 seconds
Complete requests:      1000
Failed requests:        0
Total transferred:      188000 bytes
HTML transferred:       24000 bytes
Requests per second:    2004.45 [#/sec] (mean)
Time per request:       4.989 [ms] (mean)
Time per request:       0.499 [ms] (mean, across all concurrent requests)
Transfer rate:          368.01 [Kbytes/sec] received

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:        0    0   0.1      0       1
Processing:     2    5   1.1      5      10
Waiting:        2    5   1.1      4      10
Total:          2    5   1.1      5      10

Percentage of the requests served within a certain time (ms)
  50%      5
  66%      5
  75%      6
  80%      6
  90%      6
  95%      7
  98%      8
  99%      8
 100%     10 (longest request)
