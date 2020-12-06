<?= $this->extend('templates/template-dashboard');
$this->section('content'); ?>
<div class="d-flex justify-content-between align-items-center flex-wrap grid-margin">
    <div>
        <h4 class="mb-3 mb-md-0">Edit Tim</h4>
    </div>
</div>
<div class="row">
    <div class="col-md-12 col-lg-6 grid-margin">
        <div class="card">
            <div class="card-body">
                <h6 class="card-title">Form Edit Tim</h6>
                <p class="card-description"></p>
                <?= form_open("");
                csrf_field() ?>
                <div class="form-group row">
                    <div class="col-12">
                        <div class="form-group">
                            <label for="name">Nama Tim</label>
                            <input id="name" class="form-control <?= ($validation->hasError('name')) ? 'is-invalid' : "" ?>" name="name" type="text" autofocus value="<?= (old('name')) ? old('name') : $team['name']  ?>">
                            <div class="invalid-feedback">
                                <?= $validation->getError('name') ?>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="status">Status</label>
                            <select class="form-control" id="status" name="active">
                                <option value="1" <?= ($team['active']) == 1 ? 'selected' : '' ?>>Aktif</option>
                                <option value="0" <?= ($team['active']) == 0 ? 'selected' : '' ?>>Tidak Aktif</option>
                            </select>
                        </div>

                    </div>

                </div>
                <input class="btn btn-primary" type="submit" name="submit" value="Update">
                <?= form_close() ?>
            </div>
        </div>
    </div>

</div>

<?php $this->endSection(); ?>