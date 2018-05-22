<?php
/**
 *
 */
class Recrutation_model extends CI_Model
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

		$data = array(
			'nazwisko'=>$this->input->post('nazwisko'),
			'wydzial'=>$this->input->post('wydzial'),
			'rok'=>$this->input->post('rok'),
			'email'=>$this->input->post('email'),
			'telefon'=>$this->input->post('telefon'),
			'opis'=>$this->input->post("opis"),
			'dzial'=>implode(", ",$this->input->post("dzial")),
			'projekt'=>implode(", ",$this->input->post("projekt")),
			'godziny'=>$this->input->post("godziny"),
			'pub'=>$this->input->post("pub"),

		);
		var_dump($data);
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
