const fetchDepartures = locationId => {
    return fetch(`http://bybussen-api.734sduu47i.eu-west-2.elasticbeanstalk.com/rt/${locationId}`)
        .then(result => result.json())
}

export default fetchDepartures