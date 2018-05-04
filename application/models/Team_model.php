<?php
/**
 *
 */
class Team_model extends CI_Model
{

	public function __construct()
	{
		$this->load->database();
	}
	public function team()
	{
		$query=$this->db->get("team");
		return $query->result_array();
		$this->db->get_where("team",array());
		return $query->row_array();
	}
	public function create_post()
	{
		// $slug =url_title($this->input->post('imie'));

		$data = array(
			'imie'=>$this->input->post("imie"),
			'nazwisko'=>$this->input->post('nazwisko'),
			// 'slug'=>$slug,
			'opis'=>$this->input->post("opis"),
		);
		return $this->db->insert('team',$data);
	}
	public function delete_post($id)
	{
	$this->db->where('id',$id);
	$this->db->delete('team');
	return true;
	}
}


 ?>
