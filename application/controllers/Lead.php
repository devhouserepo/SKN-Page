<?php

class Lead extends CI_Controller
{
 public function index()
	{
		$this->load->view("templates/header");
		$this->load->view("pages/lead.php");
		$this->load->view("templates/footer");
	}
}
 ?>
