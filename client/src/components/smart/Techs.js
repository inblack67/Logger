import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { getTechs } from '../../actions/techActions'
import Preloader from '../dumb/Preloader';
import PropTypes from 'prop-types'
import TechItem from './TechItem';


const Techs = ({ getTechs, techState: { techs, loading } }) => {

  useEffect(() => {
    getTechs();

    // eslint-disable-next-line
  },[]);

  if(loading || !techs)
  {
    return <Preloader />
  }

  return (
    <div className='container center'>
      <p className="flow-text">Techs</p>
      <ul className="collection-item">
        { techs.map(tech => (
          <TechItem tech={tech} key={tech._id}/>
        )) }
      </ul>
    </div>
  )
}

Techs.propTypes = {
  getTechs: PropTypes.func.isRequired,
  techState: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  techState: state.TechState
})

export default connect(mapStateToProps, { getTechs })(Techs);
