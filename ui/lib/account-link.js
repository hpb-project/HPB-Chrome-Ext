
//xhacker todo link hpbscan
module.exports = function (address, network) {
  const net = parseInt(network)
  let link
  switch (net) {
    case 1: // main net
      link = `https://hpbscan.org/address/${address}`
      break
    case 2: // morden test net
      link = `https://hpbscan.org/address/${address}`
      break
    case 3: // ropsten test net
      link = `https://hpbscan.org/address/${address}`
      break
    case 4: // rinkeby test net
      link = `https://hpbscan.org/address/${address}`
      break
    case 42: // kovan test net
      link = `https://hpbscan.org/address/${address}`
      break
    default:
      link = `https://hpbscan.org/address/${address}`
      break
  }

  return link
}
