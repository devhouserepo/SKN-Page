<?php

class Lead extends CI_Controller
{
 public function index()
	{
    $data['team']=$this->Team_model->team();
    print_r($data);
		$this->load->view("templates/header");
		$this->load->view("pages/lead.php",$data);
		$this->load->view("templates/footer");
	}
}
 ?>
