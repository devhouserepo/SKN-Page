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
    $data['team']=$this->Team_model->team();
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
     $data['team']=$this->Team_model->team();

       $data['title']="Add Message";
       $this->form_validation->set_rules('imie','Imie','required');
       $this->form_validation->set_rules('nazwisko','Nazwisko','required');
       $this->form_validation->set_rules('opis','Opis','required');
       if ($this->form_validation->run()===FALSE) {

         $this->load->view("templates/header");
         $this->load->view("pages/create",$data);
         $this->load->view("templates/footer");
       } else{
         $this->Team_model->create_post();
         // $this->load->view('pages/success');
         // redirect('index.php/thinkIt');
         redirect('index.php/create');
       }
   }
   public function delete($id)
   {
     // echo $id;
     $this->Team_model->delete_post($id);
     // redirect('pages/thinkIt');
     redirect('index.php/create');
   }

}
 ?>
