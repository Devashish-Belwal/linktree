const dns = require("dns").promises;

(async () => {
  try {
    const result = await dns.resolveSrv(
      "_mongodb._tcp.cluster0.qbskcka.mongodb.net"
    );
    console.log(result);
  } catch (err) {
    console.error(err);
  }
})();