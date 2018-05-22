<?php


class Send extends CI_Controller {

	public function message()
	{
		$config = Array(
			'protocol'=>'smtp',
			'smtp_host'=>"ssl://smtp.googlemail.com",
			'smtp_port'=>465,
			'smtp_user'=>"lucjantestowy123@gmail.com",
			'smtp_pass'=>'lucjantestowy12345',
			'mailtype'=>'html',
			'charset'=>'iso-8859-1',
			'wordwrap'=>TRUE
		);
		$this->load->library('email',$config);
		$this->email->from('sknkonsulitinguitmailtest@gmail.com','admin');
		$this->email->to('sknkonsulitinguitmailtest@gmail.com');
		$this->email->subject('EMAIL TEST');
		$this->email->message("testing the emaill class");
		$this->email->set_newline("\r\n");
	}
}
