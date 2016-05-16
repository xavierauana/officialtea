<?php

namespace App\Jobs;

use App\Contracts\Sms;
use App\Jobs\Job;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;

class SendSms extends Job implements ShouldQueue
{
    use InteractsWithQueue, SerializesModels;

    /**
     * @type string
     */
    private $body;
    /**
     * @type string
     */
    private $to;

    /**
     * Create a new job instance.
     *
     * @param string $to
     * @param string $body
     */
    public function __construct(string $to, string $body)
    {
        //
        $this->body = $body;
        $this->to = $to;
    }

    /**
     * Execute the job.
     *
     * @param \App\Contracts\Sms $service
     */
    public function handle(Sms $service)
    {
        $service->send($this->to, $this->body);
    }
}
