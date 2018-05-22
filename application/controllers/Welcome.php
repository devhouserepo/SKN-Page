<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Welcome extends CI_Controller {

	public function index()
	{
		header('Access-Control-Allow-Origin: *');
	 header('Access-Control-Allow-Methods: GET, POST');


		// $this->load->view('welcome_message');
		$this->load->model("Recrutation_model");
		// $data=$this->Recrutation_model->create_post();
		$data['team']=$this->Recrutation_model->team();



		$myObj = new stdClass();

		// foreach ($data as $key => $elem) {
		// 	$myObj->name[$key]=$elem['imie'];
		// 	// $myObj->opis->$key['opis']=$elem['opis'];
		// }

		 echo json_encode($data);
	}
}
