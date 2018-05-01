<div class="container">
   <h1 style="color:white;text-align:center;">DevHouse Page Test i pobieranie danych z bazy</h1>
  <table class="table table-dark table-hover">
    <thead>
      <tr>
        <th>Imie</th>
        <th>Nazwisko</th>
        <th>Opis</th>
      </tr>
    </thead>
    <tbody>
      <?php foreach ($team as $member): ?>
      <tr class="active">
          <td><?php echo $member['imie'] ?></td>
          <td><?php echo $member['nazwisko'] ?></td>
          <td><?php echo $member['opis'] ?></td>
      </tr>
    <?php endforeach; ?>
    </tbody>
  </table>
  <a  class="btn btn-lg btn-block btn-success"href="<?php echo base_url() ?>">HOME</a>
</div>
