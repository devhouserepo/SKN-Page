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
    // echo base_url();
    $data['team']=$this->Recrutation_model->team();
    $this->load->view("templates/header");
		$this->load->view("pages/devhouse",$data);
		$this->load->view("templates/footer");
  }
  public function thinkIt()
   {
     $this->load->view("templates/header");
     $this->load->view("pages/thinkIt");
     $this->load->view("templates/footer");
   }

   public function create()
   {
     $data['team']=$this->Recrutation_model->team();
     // var_dump($data);
   // echo json_encode($data);
       $data['title']="Add Message";
       $this->form_validation->set_rules('nazwisko','Nazwisko','required');
       $this->form_validation->set_rules('opis','Opis','required');
       $this->form_validation->set_rules('wydzial[]','Wydzial','required');
       $this->form_validation->set_rules('projekt[]','Projekt','required');
       if ($this->form_validation->run()===FALSE) {

         $this->load->view("templates/header");
         $this->load->view("pages/main");
         $this->load->view("templates/footer");
       } else{
         $this->Recrutation_model->create_post();
         redirect(base_url());
       }
   }
   public function delete($id)
   {
     header('Access-Control-Allow-Origin: *');
      header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
      header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
     // echo $id;
     $this->Recrutation_model->delete_post($id);
     // redirect('pages/thinkIt');
     redirect('index.php/create');
   }

}
 ?>
