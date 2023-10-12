const express = require('express');
const router = express.Router();
const Joi = require('joi');
const validator = require('express-joi-validation').createValidator({});
const auth = require('../middleware/auth');
const friendInvitationControllers = require('../controllers/friendInvitation/friendInvitationControllers');
const postFindPending = require('../controllers/friendInvitation/postFindPending');

const postFriendInvitationSchema = Joi.object({
  targetMailAddress: Joi.string().email(),
});
const getPendingInvitationSchema = Joi.object({})
const inviteDecisionSchema = Joi.object({
  id: Joi.string().required(),
});

router.post(
  '/invite',
  auth,
  validator.body(postFriendInvitationSchema),
  friendInvitationControllers.controllers.postInvite
);

router.post(
  '/accept',
  auth,
  validator.body(inviteDecisionSchema),
  friendInvitationControllers.controllers.postAccept
);

router.post(
  '/reject',
  auth,
  validator.body(inviteDecisionSchema),
  friendInvitationControllers.controllers.postReject
);

router.post(
  '/pending',
  auth,
  validator.body(getPendingInvitationSchema),
  friendInvitationControllers.controllers.postFindPending

)
module.exports = router;
