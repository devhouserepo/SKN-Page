<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Excel_export extends CI_Controller {

	public function index()
	{
	 header('Access-Control-Allow-Origin: *');
	 header('Access-Control-Allow-Methods: GET, POST');
	 $this->load->model("Excel_export_model");
	 $data["employee_data"]=$this->Excel_export_model->fetch_data();
	 var_dump($data);

	}
}
