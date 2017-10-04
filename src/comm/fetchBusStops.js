const fetchBusStops = fetch(`http://bybussen-api.734sduu47i.eu-west-2.elasticbeanstalk.com/stops`)
    .then(result => result.json())

export default fetchBusStops

