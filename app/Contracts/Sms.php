<?php
/**
 * Author: Xavier Au
 * Date: 11/5/2016
 * Time: 4:59 PM
 */

namespace App\Contracts;


interface Sms
{
    public function send($to, $body);
}