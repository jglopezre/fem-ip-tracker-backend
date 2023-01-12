const { request, response } = require('express');

// Provisional data, this data could be erased.
const provitionalData = {
  ip: "8.8.8.8",
  fromController: true,
  location: {
      country: "US",
      region: "California",
      city: "Mountain View",
      lat: 37.40599,
      lng: -122.078514,
      postalCode: "94043",
      timezone: "-07:00",
      geonameId: 5375481
  },
  domains: [
      "0d2.net",
      "003725.com",
      "0f6.b0094c.cn",
      "007515.com",
      "0guhi.jocose.cn"
  ],
  as: {
      asn: 15169,
      name: "Google LLC",
      route: "8.8.8.0/24",
      domain: "https://about.google/intl/en/",
      type: "Content"
  },
  isp: "Google LLC"
}

const ipTrackRequest = ( req = request, res = response ) => {

  const ipAddressReceived = req.params.ipaddress;

  res.json({
    ...provitionalData,
    ip: ipAddressReceived
  })
  
  console.log(`Server API send to client ipAddress ${ ipAddressReceived }`)
}

const forbidedIpTrackRequest = ( req = request, res = response) => {
  res.status(404).send('<h1>Resource Does Not Exist</h1>');
}

module.exports = { 
  ipTrackRequest,
  forbidedIpTrackRequest  
}