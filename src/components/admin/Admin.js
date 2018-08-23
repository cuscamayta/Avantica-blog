import React, { Component } from "react";

class Admin extends Component {
  render() {
    return (
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-3 ">
            <div class="list-group ">
              <a href="#" class="list-group-item list-group-item-action active">Dashboard</a>
              <a href="#" class="list-group-item list-group-item-action">User Management</a>
              <a href="#" class="list-group-item list-group-item-action">Used</a>
              <a href="#" class="list-group-item list-group-item-action">Enquiry</a>
              <a href="#" class="list-group-item list-group-item-action">Dealer</a>
              <a href="#" class="list-group-item list-group-item-action">Media</a>
              <a href="#" class="list-group-item list-group-item-action">Post</a>
              <a href="#" class="list-group-item list-group-item-action">Category</a>
              <a href="#" class="list-group-item list-group-item-action">New</a>
              <a href="#" class="list-group-item list-group-item-action">Comments</a>
              <a href="#" class="list-group-item list-group-item-action">Appearance</a>
              <a href="#" class="list-group-item list-group-item-action">Reports</a>
              <a href="#" class="list-group-item list-group-item-action">Settings</a>


            </div>
          </div>
          <div class="col-md-9">
            <div class="card">
              <div class="card-body">
                <div class="row">
                  <div class="col-md-2 border-right">
                    <h4>Posts</h4>
                  </div>
                  <div class="col-md-6">
                    <button type="button" class="btn btn-sm btn-primary">Add New</button>
                  </div>

                </div>
                <div class="row">
                  <div class="col-md-12">
                    <table class="table table-hover ">
                      <thead class="bg-light ">
                        <tr>
                          <th>
                            <div class="form-check-inline">
                              <label class="form-check-label">
                                <input type="checkbox" class="form-check-input" value="" />
                              </label>
                            </div>
                          </th>
                          <th>Title</th>
                          <th>Author</th>
                          <th>Categories</th>
                          <th>Tags</th>
                          <th>Comments</th>
                          <th>Date</th>
                          <th>Edit</th>

                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <div class="form-check-inline">
                              <label class="form-check-label">
                                <input type="checkbox" class="form-check-input" value="" />
                              </label>
                            </div>
                          </td>
                          <td><a href="#"><small>Johnyahua</small></a></td>
                          <td><small>Doe</small></td>
                          <td><small>john@example.com</small></td>
                          <td><small>Admin</small></td>
                          <td><a href="#"><small>5</small></a></td>
                          <td><small>Published 2018/05/21</small></td>
                          <td>
                            <a href="#"><i class="fa fa-pencil-square-o"></i></a>
                            <a href="#"><i class="fa fa-eye"></i></a>
                            <a href="#"><i class="fa fa-trash"></i></a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div class="form-check-inline">
                              <label class="form-check-label">
                                <input type="checkbox" class="form-check-input" value="" />
                              </label>
                            </div>
                          </td>
                          <td><a href="#"><small>Johnyahua</small></a></td>
                          <td><small>Doe</small></td>
                          <td><small>john@example.com</small></td>
                          <td><small>Admin</small></td>
                          <td><a href="#"><small>5</small></a></td>
                          <td><small>Published 2018/05/21</small></td>
                          <td>
                            <a href="#"><i class="fa fa-pencil-square-o"></i></a>
                            <a href="#"><i class="fa fa-eye"></i></a>
                            <a href="#"><i class="fa fa-trash"></i></a>
                          </td>
                        </tr>


                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Admin;