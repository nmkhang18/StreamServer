module.exports = {
    listenPort: 3000,
    mediasoup: {
        worker: {
            rtcMinPort: 40000,
            rtcMaxPort: 49999,
            logLevel: 'debug',
            logTags: ['info', 'ice', 'dtls', 'rtp', 'srtp', 'rtcp'],
        },
        router: {
            mediaCodecs: [
                { kind: 'audio', mimeType: 'audio/opus', clockRate: 48000, channels: 2 },
                { kind: 'video', mimeType: 'video/VP8', clockRate: 90000 },
                { kind: 'video', mimeType: 'video/H264', clockRate: 90000 }
            ]
        },
        webRtcTransport: {
            listenIps: [{ ip: '0.0.0.0', announcedIp: 'YOUR_PUBLIC_IP' }],
            enableUdp: true,
            enableTcp: true,
            preferUdp: true
        }
    }
};
