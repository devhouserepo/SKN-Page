<div class="container">
   <h1 style="color:white;text-align:center;">Add and del from db test</h1>
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
          <td>
            <a class="btn btn-danger" href=" <?php echo base_url() ?>index.php/Pages/delete/<?php echo $member['id'] ?>">USUN</a>
          </td>
          <td>
            <a class="btn btn-info" href=" <?php echo base_url() ?>pages/edit/<?php echo $member['id'] ?>">Edycja</a>
          </td>
      </tr>
    <?php endforeach; ?>
    </tbody>
  </table>
  <a  class="btn btn-lg btn-block btn-success"href="<?php echo base_url() ?>index.php">HOME</a>
  <?php
  echo validation_errors();
   ?>
  <?php echo form_open('index.php/pages/create'); ?>
    <div class="form-group">
      <label>Imie</label>
      <input type="text" class="form-control" name='imie' placeholder="Podaj Imie">
    </div>
    <div class="form-group">
      <label>Nazwisko</label>
      <input type="text" class="form-control" name='nazwisko' placeholder="Podaj Nazwisko">
    </div>
    <div class="form-group">
      <label>Opis</label>
      <textarea  class="form-control" name="opis" placeholder="Twoj opis"></textarea>
    </div>

    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
</div>
