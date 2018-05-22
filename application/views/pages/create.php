
<div class="container">
   <h1 style="color:white;text-align:center;">Add and del from db test</h1>
  <table class="table table-dark table-hover">
    <thead>
      <tr>
        <th>Id</th>
        <th>Imie i Naziwsko</th>
        <th>Studia</th>
        <th>Rok</th>
        <th>Email</th>
        <th>Telefon</th>
        <th>Opis</th>
        <th>Dzial</th>
        <th>projekt</th>
        <th>Godziny</th>
        <th>Pub</th>
      </tr>
    </thead>
    <tbody>
      <?php foreach ($team as $member): ?>
      <tr class="active">
          <td><?php echo $member['id'] ?></td>
          <td><?php echo $member['nazwisko'] ?></td>
          <td><?php echo $member['wydzial'] ?></td>
          <td><?php echo $member['rok'] ?></td>
          <td><?php echo $member['email'] ?></td>
          <td><?php echo $member['telefon'] ?></td>
          <td><?php echo $member['opis'] ?></td>
          <td><?php echo $member['dzial'] ?></td>
          <td><?php echo $member['projekt'] ?></td>
          <td><?php echo $member['godziny'] ?></td>
          <td><?php echo $member['pub'] ?></td>
          <td>
            <a class="btn btn-danger" href=" <?php echo base_url() ?>index.php/Pages/delete/<?php echo $member['id'] ?>">USUN</a>
          </td>
      </tr>
    <?php endforeach; ?>
    </tbody>
  </table>
  <!-- <a  class="btn btn-lg btn-block btn-success"href="<?php echo base_url() ?>index.php">HOME</a>
  <?php
  echo validation_errors();
   ?>
  <?php echo form_open('index.php/pages/create'); ?>
    <div class="form-group">
      <label style="color:white;">Imie i Nazwisko</label>
      <input type="text" class="form-control" name='nazwisko' placeholder="Podaj Nazwisko">
    </div>

    <label style="color:red"for="formDepartmentChoiceRecruitment">7. W jakim dziale chciałbyś/chciałabyś spróbować swoich sił:</label>

    <div class="form-group">
      <div class="checkbox">
        <label>
          <?php echo form_checkbox("dzial[]",'It',set_checkbox("dzial[]","It")) ?>
          It
        </label>
      </div>
      <div class="checkbox">
        <label>
          <?php echo form_checkbox("dzial[]",'devHouse',set_checkbox("dzial[]","devHouse")) ?>
          devHouse
        </label>
      </div>
      <div class="checkbox">
        <label>
          <?php echo form_checkbox("dzial[]",'costam',set_checkbox("dzial[]","costam")) ?>
          Costam
        </label>
      </div>

      <div class="form-group">
        <label style="color:white;">Opis</label>
        <textarea  class="form-control" name="opis" placeholder="Twoj opis"></textarea>
      </div>
    </div>

    <button type="submit" class="btn btn-primary">Submit</button>
  </form> -->
</div>
