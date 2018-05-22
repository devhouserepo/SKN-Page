<?php
/**
 *
 */
class Contact extends CI_Controller
{


	public function index()
	{
		// echo "string";
		// $this->load->view("pages/main");
	}
	//
// 	public function postEmail()
// {
//     $config = Array(
//         'protocol' => 'smtp',
//         'smtp_host' => 'ssl://smtp.googlemail.com',
//         'smtp_port' => 465,
//         'smtp_user' => 'lucjantestowy123@gmail.com',
//         'smtp_pass' => 'lucjantestowy12345',
//         'mailtype'  => 'html',
//         'charset'   => 'iso-8859-1'
//     );
//     $this->load->library('email', $config);
//     $this->email->set_newline("\r\n");
//     $this->email->from('uvizag@gmail.com', 'admin');
//     $this->email->to('lucjantestowy123@gmail.com, lucjantestowy123@gmail.com');
//     $this->email->subject('Registration Verification:');
//     $message = "Thanks for signing up! Your account has been created...!";
// 		show_error($this->email->print_debugger());
//     $this->email->message($message);
//     if ( ! $this->email->send()) {
//         show_error($this->email->print_debugger());
//     }
//
// }


	public function postEmail()
	{
	$data = $this->input->post();
	// print_r($data);
	$this->load->library('email');
	$config = array();
	$config['protocol']="SMTP";
	$config['smtp_host']="ssl0.ovh.net";
	$config['smtp_user']="kontakt@sknkonsultinguit.pl";
	$config['smtp_pass']="Zapytaj mnie o haslo ;)";
	$config['smtp_port']="25";
	$config['mailtype']="html";
	$this->email->initialize($config);
	$this->email->set_newline("\r\n");

	$this->email->from($data['formEmail']);
	$this->email->to('kontakt@sknkonsultinguit.pl');
	$this->email->subject($data['formName']." ".$data['formSurname']." ".$data['formSchool']." ".$data['formDepartment']);
	// $this->email->subject($data['subject']);
	$this->email->message($data['formMessage']);
	if ($this->email->send()) {
		$this->session->set_flashdata('success','Email Sent Successfully');
  	// redirect('pages/view/1');
		redirect(base_url());

	}


	}
}


 ?>
