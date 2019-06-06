import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Pokeball from '../pokeball.png'
import { connect } from 'react-redux';
import { addPost } from '../store/actions/postActions';

const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  // validate form errors being empty
  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false);
  });

  // validate the form was filled out
  Object.values(rest).forEach(val => {
    val === null && (valid = false);
  });

  return valid;
};

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: null,
      body: null,
      formErrors: {
        id: "",
        title: "",
        body: "",
      }
    };
    // preserve the initial state in a new object
    this.baseState = this.state 
  }

  resetForm = () => {
    this.setState(this.baseState);
    document.getElementById("create-from-post").reset();
  }
  handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };
    switch (name) {
      case "title":
        formErrors.title =
          value.length < 5 ? "minimum 5 characaters required" : "";
        break;
      case "body":
        formErrors.body =
          value.length < 5 ? "minimum 5 characaters required" : "";
        break;
      default:
        break;
    }
    this.setState({ formErrors, [name]: value }, () => console.log(this.state));
  }

  onSubmit = (e) => {
    e.preventDefault();
    if (formValid(this.state)) {
      this.props.addPost({id: Math.floor(Math.random() * 9999996) + 1, title: this.state.title, body: this.state.body});
      this.resetForm();
      console.log(this.state);
    }
  }

  render() {
    const { formErrors } = this.state;
    const { posts } = this.props;
    const postList = posts.length ? (
      posts.map(post => {
        return (
          <div className="post card" key={post.id}>
            <img src={Pokeball} alt="A Pokeball" />
            <div className="card-content">
              <Link to={'/' + post.id}>
                <span className="card-title red-text">{post.title}</span>
              </Link>
              <p>{post.body}</p>
            </div>
          </div>
        )
      })
    ) : (
        <div className="center">No posts to show</div>
      );

    return (
      <div>
        <h4 className="center">Home</h4>

        <div className="container home">
          <div className="row">
            <form id="create-from-post" className="col s12" onSubmit={this.onSubmit} noValidate>
              <div className="row">
                <div className="input-field col s12">
                  <input
                    id="first_name"
                    name="title"
                    type="text"
                    className="validate"
                    // value={this.state.title}
                    noValidate
                    onChange={this.handleChange}
                  />
                  {formErrors.title.length > 0 && (
                    <span className="helper-text" data-error="wrong">{formErrors.title}</span>
                  )}
                  <label htmlFor="first_name">Title</label>

                </div>

                <div className="input-field col s12">
                  <textarea
                    id="textarea1"
                    name="body"
                    className="materialize-textarea"
                    noValidate
                    // value={this.state.body}
                    onChange={this.handleChange}
                  ></textarea>
                  {formErrors.body.length > 0 && (
                    <span className="helper-text" data-error="wrong">{formErrors.body}</span>
                  )}
                  <label htmlFor="textarea1">Post Detail</label>
                </div>
              </div>
              <div className='center'>
                <button type="submit" className='btn waves-effect waves-light red lighten-2'>
                  Add Post
                </button>
              </div>
            </form>
          </div>
          {postList}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    posts: state.posts,
    fromReactState: ownProps
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addPost: (data) => { dispatch(addPost(data)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)