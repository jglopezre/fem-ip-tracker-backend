const { Router } = require('express');
const { ipTrackRequest, forbidedIpTrackRequest } = require('../controllers/ipTrackRequest');

const router = Router();

router.get('/:ipaddress', ipTrackRequest );
router.get('/', forbidedIpTrackRequest);


module.exports = router;