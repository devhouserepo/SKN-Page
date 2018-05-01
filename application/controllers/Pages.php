<?php

class Pages extends CI_Controller
{
 public function view($page="main")
	{
		if (!file_exists(APPPATH.'views/pages/'.$page.'.php')) {
			show_404();
		}
		$data['title']=ucfirst($page);
		$this->load->view("templates/header");
		$this->load->view("pages/".$page,$data);
		$this->load->view("templates/footer");
	}
  public function devHouse()
  {
    $data['team']=$this->Team_model->team();
    $this->load->view("templates/header");
		$this->load->view("pages/devhouse",$data);
		$this->load->view("templates/footer");
  }
  public function thinkIt()
   {
     $data['team']=$this->Team_model->team();
     $this->load->view("templates/header");
     $this->load->view("pages/thinkIt",$data);
     $this->load->view("templates/footer");
   }
}
 ?>
