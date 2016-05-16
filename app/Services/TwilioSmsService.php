<?php
/**
 * Author: Xavier Au
 * Date: 11/5/2016
 * Time: 4:59 PM
 */

namespace App\Services;


use App\Contracts\Sms;
use Services_Twilio;

class TwilioSmsService implements Sms
{
    private $client;
    /**
     * TwilioSmsService constructor.
     */
    public function __construct()
    {
        $sid = env("TWILIO_SID");
        $token = env("TWILIO_TOKEN");
        $this->client =new Services_Twilio($sid, $token);
    }

    public function send($to, $body)
    {
        $from = "+16173907849";
        $this->client->account->messages->create(array(
            'To'   => $to,
            'From' => $from,
            'Body' => $body
        ));
    }
}