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
}


 ?>
